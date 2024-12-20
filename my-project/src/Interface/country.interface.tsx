export interface Country {
  ccn3: string;
  cca3: string;
  flags: {
    svg: string;
  };
  name: {
    common: string;
    nativeName?: { [key: string]: { common: string } };
  };
  population: number;
  region: string;
  subregion: string;
  capital?: string[];
  tld?: string[];
  currencies?: { [key: string]: { name: string } };
  languages?: { [key: string]: string };
  borders?: string[];
}
