type LayoutProps = {
  children: React.ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({ children }: LayoutProps) => {
  return (
    <div>
      <main>{children}</main>
    </div>
  );
};
