//TypeScript definitions for styled-components can be extended by using declaration merging since version v4.1.4 of the definitions.

//Declaration merging means that the compiler merges two separate declarations declared wit hthe same name into a single definition.

//Merged def has the features of both of the og declarations.
// You can merge any number of declarations

import 'styled-components';



// https://www.typescriptlang.org/docs/handbook/declaration-merging.html
declare module 'styled-components' {
  //DefaultTheme is being used as an interface of props.theme out of the box. By default the interface DefaultTheme is empty so that's why we need to extend it.


  // We can break this file up even more,
  export interface DefaultTheme {
    borderRadius: string;
    colors: {
      main: string;
      secondary: string;
    };
  }
}