import { UserButton } from '@clerk/nextjs';

const DashboardPage = () => {
  return (
    <div>
      <UserButton afterSignOutUrl="/" />
      <p>Dashboard Page (protected)</p>
    </div>
  );
};

export default DashboardPage;
