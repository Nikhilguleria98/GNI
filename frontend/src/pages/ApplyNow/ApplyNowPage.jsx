import ApplyNowForm from "../../components/ApplyNowForm/ApplyNowForm";

const ApplyNowPage = () => {
  return (
    <ApplyNowForm
      isOpen={true}
      onClose={() => window.history.back()}
    />
  );
};

export default ApplyNowPage;