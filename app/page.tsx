import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <>
      <Button variant={'default'}>default</Button>
      <Button variant={'destructive'}>destructive</Button>
      <Button variant={'outline'}>outline</Button>
      <Button variant={'secondary'}>secondary</Button>
      <Button variant={'ghost'}>ghost</Button>
      <Button variant={'link'}>link</Button>
    </>
  );
}
