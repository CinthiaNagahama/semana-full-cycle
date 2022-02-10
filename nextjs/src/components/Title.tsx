type TitleProps = {
  title: string
};

export const Title: React.FunctionComponent<TitleProps> = ({title}: TitleProps) => {
  return(
    <h1 className="text-5xl leading-normal text-gray-700 dark:text-white">{title}</h1>
  );
};