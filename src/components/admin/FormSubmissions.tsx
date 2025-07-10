
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useAdmin } from '@/contexts/AdminContext';
import { useAuth } from '@/hooks/useAuth';
import { Phone, Mail, Calendar, User, Download, FileSpreadsheet, RefreshCw, Database } from 'lucide-react';

const FormSubmissions = () => {
  const { formSubmissions } = useAdmin();
  const { token } = useAuth();
  const [apiLeads, setApiLeads] = useState([]);
  const [loading, setLoading] = useState(false);
  const [usingApi, setUsingApi] = useState(false);

  // Buscar leads da API PostgreSQL
  const fetchApiLeads = async () => {
    if (!token) return;
    
    setLoading(true);
    try {
      const apiUrl = import.meta.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3001';
      const response = await fetch(`${apiUrl}/api/leads`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        const data = await response.json();
        setApiLeads(data);
        setUsingApi(true);
        console.log('✅ Leads carregados da API PostgreSQL:', data.length);
      } else {
        console.log('⚠️ API indisponível, usando localStorage');
        setUsingApi(false);
      }
    } catch (error) {
      console.error('❌ Erro ao buscar leads da API:', error);
      setUsingApi(false);
    } finally {
      setLoading(false);
    }
  };

  // Carregar leads na inicialização
  useEffect(() => {
    fetchApiLeads();
  }, [token]);

  // Dados exibidos (API ou localStorage)
  const displayLeads = usingApi ? apiLeads : formSubmissions;

  const formatDate = (timestamp: string | Date) => {
    const date = typeof timestamp === 'string' ? new Date(timestamp) : timestamp;
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const formatPhone = (phone: string) => {
    if (!phone) return 'N/A';
    return phone.replace(/\D/g, '').replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
  };

  const exportToCSV = () => {
    const headers = ['Nome', 'E-mail', 'WhatsApp', 'Data'];
    const csvContent = [
      headers.join(','),
      ...displayLeads.map(submission => [
        `"${submission.name}"`,
        `"${submission.email}"`,
        `"${formatPhone(submission.phone)}"`,
        `"${formatDate(submission.createdAt || submission.timestamp)}"`
      ].join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `leads_sollara_garden_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const exportToExcel = () => {
    const headers = ['Nome', 'E-mail', 'WhatsApp', 'Data'];
    let excelContent = '<table border="1"><tr>';
    
    // Headers
    headers.forEach(header => {
      excelContent += `<th>${header}</th>`;
    });
    excelContent += '</tr>';
    
    // Data
    displayLeads.forEach(submission => {
      excelContent += '<tr>';
      excelContent += `<td>${submission.name}</td>`;
      excelContent += `<td>${submission.email}</td>`;
      excelContent += `<td>${formatPhone(submission.phone)}</td>`;
      excelContent += `<td>${formatDate(submission.createdAt || submission.timestamp)}</td>`;
      excelContent += '</tr>';
    });
    
    excelContent += '</table>';
    
    const blob = new Blob([excelContent], { type: 'application/vnd.ms-excel' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `leads_sollara_garden_${new Date().toISOString().split('T')[0]}.xls`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (loading) {
    return (
      <div className="text-center py-12">
        <RefreshCw className="w-12 h-12 text-blue-500 mx-auto mb-4 animate-spin" />
        <h3 className="text-lg font-medium text-gray-900 mb-2">Carregando leads...</h3>
        <p className="text-gray-500">
          Conectando ao banco de dados PostgreSQL
        </p>
      </div>
    );
  }

  if (displayLeads.length === 0) {
    return (
      <div className="text-center py-12">
        <Mail className="w-12 h-12 text-gray-400 mx-auto mb-4" />
        <h3 className="text-lg font-medium text-gray-900 mb-2">Nenhum lead capturado ainda</h3>
        <p className="text-gray-500">
          Os dados dos formulários enviados aparecerão aqui
        </p>
        {usingApi && (
          <p className="text-green-600 text-sm mt-2">
            ✅ Conectado ao PostgreSQL
          </p>
        )}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Status da conexão */}
      <div className="flex items-center justify-between bg-gray-50 p-4 rounded-lg">
        <div className="flex items-center space-x-2">
          <Database className={`w-5 h-5 ${usingApi ? 'text-green-600' : 'text-orange-500'}`} />
          <span className="text-sm font-medium">
            {usingApi ? 'PostgreSQL conectado' : 'Usando localStorage (backup)'}
          </span>
        </div>
        <Button 
          onClick={fetchApiLeads} 
          variant="outline" 
          size="sm"
          disabled={loading}
        >
          <RefreshCw className={`w-4 h-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
          Atualizar
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <User className="w-8 h-8 text-blue-600" />
              <div className="ml-4">
                <p className="text-2xl font-bold">{displayLeads.length}</p>
                <p className="text-gray-600">Total de Leads</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <Calendar className="w-8 h-8 text-green-600" />
              <div className="ml-4">
                <p className="text-2xl font-bold">
                  {displayLeads.filter(s => {
                    const today = new Date();
                    const submissionDate = new Date(s.createdAt || s.timestamp);
                    return submissionDate.toDateString() === today.toDateString();
                  }).length}
                </p>
                <p className="text-gray-600">Hoje</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <Mail className="w-8 h-8 text-purple-600" />
              <div className="ml-4">
                <p className="text-2xl font-bold">
                  {displayLeads.filter(s => s.email && s.email.includes('@')).length}
                </p>
                <p className="text-gray-600">E-mails Válidos</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Export Buttons */}
      <div className="flex space-x-4">
        <Button onClick={exportToCSV} variant="outline" className="flex items-center space-x-2">
          <Download className="w-4 h-4" />
          <span>Exportar CSV</span>
        </Button>
        <Button onClick={exportToExcel} variant="outline" className="flex items-center space-x-2">
          <FileSpreadsheet className="w-4 h-4" />
          <span>Exportar Excel</span>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Últimos Contatos</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nome</TableHead>
                <TableHead>E-mail</TableHead>
                <TableHead>WhatsApp</TableHead>
                <TableHead>Data</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {displayLeads.map((submission, index) => (
                <TableRow key={submission.id || index}>
                  <TableCell className="font-medium">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-2 text-gray-400" />
                      {submission.name}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <Mail className="w-4 h-4 mr-2 text-gray-400" />
                      <a 
                        href={`mailto:${submission.email}`}
                        className="text-blue-600 hover:underline"
                      >
                        {submission.email}
                      </a>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <Phone className="w-4 h-4 mr-2 text-gray-400" />
                      {submission.phone ? (
                        <a 
                          href={`https://wa.me/55${submission.phone.replace(/\D/g, '')}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-green-600 hover:underline"
                        >
                          {formatPhone(submission.phone)}
                        </a>
                      ) : (
                        <span className="text-gray-400">N/A</span>
                      )}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2 text-gray-400" />
                      {formatDate(submission.createdAt || submission.timestamp)}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant={usingApi ? "default" : "secondary"}>
                      {usingApi ? "PostgreSQL" : "LocalStorage"}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default FormSubmissions;
