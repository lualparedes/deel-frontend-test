export const getPostTitles = (data: Record<string, any>): string[] => {
  return (
    data?.data?.children?.map(
      (child: Record<string, any>) => child.data.title
    ) ?? []
  );
};
