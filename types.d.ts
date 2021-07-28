type LabelT = {
  label: string;
};

type MovieImageT = {
  label: string;
  attributes: {
    height: string;
  };
};

type MoviePriceT = {
  label: string;
  attributes: {
    amount: string;
    currency: string;
  };
};

type MovieContentTypeT = {
  attributes: {
    term: string;
    label: string;
  };
};

type MovieTitleT = {
  label: string;
};

type MovieLinkT = {
  rel: string;
  tpye: string;
  href: string;
  title?: string;
};

type MovieID = {
  label: string;
  attributes: {
    'im:id': string;
  };
};

type MovieCategory = {
  attributes: {
    'im:id': string;
    term: string;
    scheme: string;
    label: string;
  };
};

type MovieReleaseDateT = {
  label: string;
  attributes: {
    label: string;
  };
};

export type MovieT = {
  'im:name': LabelT;
  'im:image': MovieImageT[];
  summary: LabelT;
  'im:price': MoviePriceT;
  'im:contentType': MovieContentTypeT;
  rights: LabelT;
  title: LabelT;
  link: Array<{ attributes: MovieLinkT }>;
  id: MovieID;
  'im:artist': LabelT;
  category: MovieCategory;
  'im:releaseDate': MovieReleaseDateT;
};
