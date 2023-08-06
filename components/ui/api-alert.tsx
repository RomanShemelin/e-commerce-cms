'use client'
import { Copy, Server } from 'lucide-react';
import toast from 'react-hot-toast';
import { Alert, AlertDescription, AlertTitle } from './alert';
import { Badge, BadgeProps } from './badge';
import { Button } from './button';

interface ApiAlertProps {
  title: string;
  description: string;
  variant: 'public' | 'admin';
}
const textMap: Record<ApiAlertProps['variant'], string> = {
  public: 'Public',
  admin: 'Admin',
};
const variantMap: Record<ApiAlertProps['variant'], BadgeProps['variant']> = {
  public: 'secondary',
  admin: 'destructive',
};

export const ApiAlert = ({
  title,
  description,
  variant = 'public',
}: ApiAlertProps) => {
  const onCopy = () => {
    navigator.clipboard.writeText(description);
    toast.success('API route copied to the clipboard');
  };
  return (
    <Alert>
      <Server className='h-4 w-4' />
      <AlertTitle className='flex items-center gap-x-2'>
        {title}
        <Badge variant={variantMap[variant]}>{textMap[variant]}</Badge>
      </AlertTitle>
      <AlertDescription className='mt-4 flex items-center justify-between'>
        <code className='relative rounded bg-mutted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold'>
          {description}
        </code>
        <Button variant='outline' size='sm' onClick={onCopy}>
          <Copy className='h-4 w-4' />
        </Button>
      </AlertDescription>
    </Alert>
  );
};
