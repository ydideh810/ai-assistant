import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';


interface Props {
  className?: string
}

export function ThreeDotsLoading({ className }: Props) {
  return (
    <div className={'space-x-2 animate-pulse'}>
      <Dot className={cn(className, 'animate-[pulse_1s_ease-in-out_infinite]')} />
      <Dot className={cn(className, 'animate-[pulse_1s_ease-in-out_0.2s_infinite]')} />
      <Dot className={cn(className, 'animate-[pulse_1s_ease-in-out_0.4s_infinite]')} />
    </div>
  );
}

function Dot({ className }: Props) {
  return <span className={cn('bg-gray-900 dark:bg-gray-50 h-1 w-1 rounded-full inline-block', className)} />;
}

export function SpinnerLoading ({ className }: Props) {
  return (
    <Loader2 className={cn('animate-spin', className)} />
  );
}
