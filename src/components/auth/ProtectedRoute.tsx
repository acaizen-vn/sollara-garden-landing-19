import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  // Para o sistema de login simples, sempre permitir acesso ao admin
  // Em um sistema real, você verificaria a autenticação aqui
  return <>{children}</>;
};

export default ProtectedRoute;