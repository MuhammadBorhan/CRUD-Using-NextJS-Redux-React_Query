import Head from "next/head";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import Form from "../components/Form";
import Table from "../components/Table";
import { useDispatch, useSelector } from "react-redux";
import { deleteAction, toggleChangeAction } from "../redux/reducer";
import { Check, Close, Crop } from "@mui/icons-material";
import { useQueryClient } from "react-query";
import { deleteUser, getAllUser } from "../lib/helper";

export default function Home() {
  const visible = useSelector((state) => state.app.client.toggleForm);
  const deleteId = useSelector((state) => state.app.client.deleteId);
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(toggleChangeAction());
  };

  const handleDelete = async () => {
    if (deleteId) {
      await deleteUser(deleteId);
      await queryClient.prefetchQuery("users", getAllUser);
      await dispatch(deleteAction(null));
    }
  };

  const handleCancle = async () => {
    await dispatch(deleteAction(null));
  };
  return (
    <section>
      <Head>
        <title>CRUD App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="py-5 px-10 md:px-20">
        <h1 className="text-xl font-bold md:text-4xl text-center py-5">
          Employee Management
        </h1>
        <div className="container py-4 mx-auto border-b flex justify-between sticky top-0 z-50">
          <button
            onClick={handleClick}
            className="py-2 px-4 rounded-sm text-white bg-blue-500 flex items-center gap-1 hover:text-gray-300"
          >
            Add Employee
            <span>
              {" "}
              <PersonAddAltOutlinedIcon />{" "}
            </span>
          </button>
          {deleteId ? deleteFunction({ handleDelete, handleCancle }) : <></>}
        </div>

        {/* form section */}
        {visible ? <Form /> : <></>}

        <div className="py-5 -z-10">
          <Table />
        </div>
      </main>
    </section>
  );
}

function deleteFunction({ handleDelete, handleCancle }) {
  return (
    <div className="flex gap-3 items-center">
      <p className=" font-bold text-indigo-500">Are Your Sure?</p>
      <div className="flex gap-2 ">
        <button
          onClick={handleDelete}
          className="bg-red-500 text-white font-bold p-2 rounded flex items-center"
        >
          <span>Yes</span>
          <Check />
        </button>
        <button
          onClick={handleCancle}
          className="bg-green-500 text-white font-bold p-2 rounded flex items-center"
        >
          <span>No</span>
          <Close />
        </button>
      </div>
    </div>
  );
}
