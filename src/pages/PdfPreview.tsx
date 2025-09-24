import { useParams } from "react-router-dom";

const PdfPreview = () => {
  const { fileName } = useParams();

  return (
    <>
      <iframe src={`/${fileName}`} className="w-screen h-screen" />
    </>
  );
};

export default PdfPreview;
