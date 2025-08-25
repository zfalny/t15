interface SectionHeaderProps {
  subtitle: string;
  title: string;
  description: string;
}

const SectionHeader = ({ subtitle, title, description }: SectionHeaderProps) => {
  return (
    <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
      <p className="text-primary font-semibold mb-2">{subtitle}</p>
      <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4">{title}</h2>
      <p className="text-text-secondary text-lg">{description}</p>
    </div>
  );
};

export default SectionHeader;
