import { useParams, Link } from 'react-router-dom';
import { records } from '../../constants/records.js';
import Modal from '../molecules/Modal.jsx';
import styled from 'styled-components';

import * as S from '../../styles/RecordDetailModal.style'

export default function RecordDetailModal({ open, onClose, detail }) {
  const { id } = useParams();
  const record = records.find((r) => r.id === parseInt(id));
  if (!open) return null;
  return (
    <Modal onClose={onClose}>
      <S.TextWrapper>
        <S.Titletext>{detail.title}</S.Titletext>
      </S.TextWrapper>
      <S.Content>
        테스트용테스트용테스트용테스트용테스트용테스트용테스트용테스트용테스트용테스트용테스트용테스트용테스트용테스트용테스트용테스트용테스트용테스트용테스트용테스트용테스트용테스트용테스트용테스트용테스트용테스트용테스트용테스트용테스트용테스트용테스트용테스트용테스트용테스트용테스트용테스트용테스트용테스트용테스트용테스트용테스트용테스트용테스트용테스트용테스트용테스트용테스트용테스트용테스트용테스트용테스트용테스트용테스트용테스트용테스트용테스트용테스트용테스트용테스트용테스트용테스트용테스트용테스트용테스트용테스트용테스트용테스트용테스트용테스트용테스트용테스트용테스트용테스트용테스트용테스트용테스트용테스트용테스트용테스트용테스트용
      </S.Content>
      <S.Content>
        {detail.content}
      </S.Content>
    </Modal>
  );
}
