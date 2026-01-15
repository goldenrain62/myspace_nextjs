const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex-1 flex flex-col md:flex-row overflow-hidden relative">
      {children}
    </main>
  );
};

export default Layout;
