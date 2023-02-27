type HeadingProps = {
  title: string;
};

export function Heading({ title }: HeadingProps) {
  return <h1 className="text-3xl text font-bold underline">{title}</h1>;
}
