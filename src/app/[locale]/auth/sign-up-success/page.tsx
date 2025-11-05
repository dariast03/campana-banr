import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function SignUpSuccessPage() {
  return (
    <div className='flex min-h-svh w-full items-center justify-center p-6 md:p-10'>
      <div className='w-full max-w-sm text-center'>
        <h1 className='mb-4 text-2xl font-bold'>Check your email</h1>
        <p className='text-muted-foreground mb-6'>
          We&apos;ve sent you a confirmation link. Please check your email and
          click the link to activate your account.
        </p>
        <Button asChild>
          <Link href='/auth/sign-in'>Back to Sign In</Link>
        </Button>
      </div>
    </div>
  );
}
