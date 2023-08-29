import './styles.scss';

interface Layoutrops {
  children: React.ReactNode;
}

function Layout({ children }: Layoutrops) {
  return (
    <main className="page">
      {children}
    </main>
  );
}

export default Layout;
