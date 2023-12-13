const generateHref = (text: string) => {
  return `#${text.replace(" ", "-").toLowerCase()}`;
};

export { generateHref };
