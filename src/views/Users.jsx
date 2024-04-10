import List from "../components/List";


export default function Users() {

  const handlerFilter = () => {

  }

  return (
    <div className="">
      <h1 className="mt-10 font-bold text-xl">Lista de todos nuestros Usuarios</h1>
      <div className="flex">
          <List onFilter={handlerFilter}>
            
          </List>
      </div>
    </div>
  );
}