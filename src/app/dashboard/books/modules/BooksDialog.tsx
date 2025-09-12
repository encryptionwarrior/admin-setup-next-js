"use client"
import { Dispatch, SetStateAction } from 'react';
import { BooksDeleteDialog } from './actions/books-delete-dialog';

export type UsersDialogType = 'invite' | 'add' | 'edit' | 'delete';

interface IBooksDialogsProps<T> {
  open: UsersDialogType | null;
  setOpen: (str: UsersDialogType | null) => void;
  currentRow: T;
  setCurrentRow: Dispatch<SetStateAction<number | null>>;
}

// export function BooksDialogs<T>({currentRow, open, setCurrentRow, setOpen}: IBooksDialogsProps<T>) {

//   return (
//     <>
//       {/* <UsersActionDialog
//         key='user-add'
//         open={open === 'add'}
//         onOpenChange={() => setOpen('add')}
//       />

//       <UsersInviteDialog
//         key='user-invite'
//         open={open === 'invite'}
//         onOpenChange={() => setOpen('invite')}
//       /> */}

//       {currentRow && (
//         <>
//           {/* <UsersActionDialog
//             key={`user-edit-${currentRow?.id}`}
//             open={open === 'edit'}
//             onOpenChange={() => {
//               setOpen('edit');
//               setTimeout(() => {
//                 setCurrentRow(null);
//               }, 500);
//             }}
//             currentRow={currentRow}
//           /> */}

//           <BooksDeleteDialog
//             key={`user-delete-${currentRow?.id}`}
//             open={open === 'delete'}
//             onOpenChange={() => {
//               setOpen('delete');
//               setTimeout(() => {
//                 setCurrentRow(null);
//               }, 500);
//             }}
//             currentRow={currentRow}
//           />
//         </>
//       )}
//     </>
//   );
// }


export function BooksDialogs<T extends { id: number | string, username: string }>(
  { currentRow, open, setCurrentRow, setOpen }: IBooksDialogsProps<T>
) {
  return (
    <>
      {currentRow && (
        <>
          <BooksDeleteDialog
            key={`user-delete-${currentRow.id}`}
            open={open === 'delete'}
            onOpenChange={() => {
              setOpen('delete');
              setTimeout(() => {
                setCurrentRow(null);
              }, 500);
            }}
            currentRow={currentRow}
          />
        </>
      )}
    </>
  );
}
