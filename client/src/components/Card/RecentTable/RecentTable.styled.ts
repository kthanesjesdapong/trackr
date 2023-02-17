import styled from "styled-components";


export const Tag = styled.span<{ color: string; }>`
  display: inline-block;
  padding: 0.2em 0.5em;
  margin: 0.2em;
  border-radius: 7px;
  font-size: 0.8em;
  font-weight: bold;
  color: white;
  background-color: ${(props) => props.color};
  &:hover {
    opacity: 60%;
    transition: .3s ease-in-out;
    cursor: pointer;
  }
`;



export const P = styled.p<{ color: string; }>`
color: ${(props) => props.color}
`;



export const Table = styled.table`
 width: 100%;
 border-radius: 8px; 
 box-shadow: 4px 4px 4px rgb(0 1 1 / 30%);
 border-collapse: collapse; 
 border-spacing: 0;
 overflow: hidden;
 
 p{

  font-weight: bold;
  font-family: ${props => props.theme.fonts.primary};
 }
  .tag{
    ${Tag}
  }

  th, td {
    text-align: left;


  }

  th {
    padding:10px 3px 10px;
  }

  th {
    background-color: #f2f2f2;
    &:first-child {
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
    }
    &:last-child{
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
    }
  }
  td {
    border-bottom: 1px solid #ddd;
    padding: 1px 3px 4px;
  }
  tr:hover {
    background-color: #f5f5f5;
    transition: 0.3s ease;
  }

  @media (max-width: 768px) {
    display: block;
    overflow-x: auto;
    p {
      font-size: 12px;
    }
    thead {
      display: none;
    }

    tbody {
      display: block;
      width: 100%;
    }

    tr {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      margin-bottom: 8px;
      
    }

    td {
      width: 100%;
      margin-bottom: 4px;

      font: ${props => props.theme.fonts.secondary};

      &:before {
        content: attr(data-label);
        font-weight: normal;
        display: inline-block;
        width: 50%;
        margin-right: 5%;
        text-align: right;
      }
    }
  }
`;




// const RecentTableStyles = styled.table`
//   width: 100%;
//   border-collapse: collapse;

//   .tag {
//     ${Tag};
//   }

//   table {
//     width: 100%;
//   }

//   th, td {
//     padding: 12px;
//     text-align: left;
//     border-bottom: 1px solid #ddd;
//   }

//   th {
//     background-color: #f2f2f2;
//   }

//   tr:hover {
//     background-color: #f5f5f5;
//   }

//   @media (max-width: 768px) {
//     display: block;
//     overflow-x: auto;

//     thead {
//       display: none;
//     }

//     tbody {
//       display: block;
//       width: 100%;
//     }

//     tr {
//       display: flex;
//       flex-wrap: wrap;
//       justify-content: space-between;
//       margin-bottom: 10px;
//     }

//     td {
//       width: 100%;
//       margin-bottom: 4px;
//       font-family: ${props => props.theme.fonts.secondary};

//       &:before {
//         content: attr(data-label);
//         font-weight: thin;
//         display: inline-block;
//         width: 50%;
//         margin-right: 5%;
//         text-align: right;
//       }
//     }
//   }
// `;






// export default RecentTableStyles;