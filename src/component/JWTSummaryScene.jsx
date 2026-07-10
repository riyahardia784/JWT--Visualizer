import TokenCard from "./TokenCard";
import JWTSummaryCard from "./JWTSummaryCard";
import JWTSummaryMindMap from "./JWTSummaryMindMap";

function JWTSummaryScene({
  token,
  header,
  payload,
  secret,
}) {
  return (
    <>
      

      <TokenCard token={token} />

      <JWTSummaryMindMap />

      <JWTSummaryCard
        header={header}
        payload={payload}
        secret={secret}
      />
    </>
  );
}

export default JWTSummaryScene;