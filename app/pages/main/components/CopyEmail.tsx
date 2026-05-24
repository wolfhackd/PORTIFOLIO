import { useState } from 'react';
import { toast } from 'sonner';
import { Copy, CheckCheck } from 'lucide-react';
import { Button } from '../../../components/ui/button';
interface CopyEmailProps {
  email: string;
}

const CopyEmail = ({ email }: CopyEmailProps) => {
  const [copied, setCopied] = useState(false);

  const handleClick = () => {
    setCopied(true);
    toast.success('Copiado para a área de transferência', {
      description: 'Email copiado com sucesso',
      action: {
        label: 'Enviar Email',
        onClick: () => window.open(`mailto:${email}`, '_blank'),
      },
    });
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };
  return (
    <Button
      variant={'link'}
      className="hover:text-muted-foreground text-white cursor-pointer transition-all"
      onClick={handleClick}
    >
      {!copied ? (
        <>
          <Copy />
          <span>{email}</span>
        </>
      ) : (
        <>
          <CheckCheck />
          <span>Copiado para a área de transferência</span>
        </>
      )}
    </Button>
  );
};

export default CopyEmail;