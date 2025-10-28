import { useParams, Link } from 'react-router-dom';
import { records } from './RecordeList';

function RecordDetails() {
  const { id } = useParams();
  const record = records.find((r) => r.id === parseInt(id));
  if (!record) return <p>기록을 찾을 수 없습니다.</p>;

  return (
    <div>
      <h1>{record.title}</h1>
      <p>{record.date}</p>
      <p>{record.content}</p>
      <Link to="/records">목록으로 돌아가기</Link>
    </div>
  );
}

export default RecordDetails;
