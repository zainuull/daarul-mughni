const UpdateEvent = ({params} : {params:{id:String}}) => {
  return (
    <div>
      <div>Update Event : {params?.id}</div>
    </div>
  );
};

export default UpdateEvent;
