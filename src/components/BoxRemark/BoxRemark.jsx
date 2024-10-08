import { TextArea } from "semantic-ui-react";

const BoxRemark = ({
  remark,
  listRemark,
  onDataChange,
  onSubmitData,
  maxLength,
}) => {
  return (
    <>
      <TextArea
        value={remark}
        maxLength={maxLength}
        onChange={(e) => onDataChange("remark", e)}
      />
      <button onClick={() => onSubmitData()}>Submit remark</button>
      {listRemark.map((remark) => (
        <p>{remark}</p>
      ))}
    </>
  );
};

export default BoxRemark;
