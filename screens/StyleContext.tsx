import {createContext} from 'react';

const context = {
  bg: 'red',
  color: 'white',
};

type MyContextType = {
  bg: string;
  color: string;
};

type StyleProvderProps = {
  children: React.ReactNode;
};
export const MyContext = createContext<MyContextType>(context);

export const StyleContextProvider = ({children}: StyleProvderProps) => {
  return <MyContext.Provider value={context}>{children}</MyContext.Provider>;
};
