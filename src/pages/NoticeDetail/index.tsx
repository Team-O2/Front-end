import { getNoticeData } from 'apis';
import React, { useCallback, useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router';
import { INotice, INoticeComment } from 'types/notice.type';
import NoticeDetailTemplate from './template';
interface MatchParams {
  id: string;
}

function NoticeDetail({ match }: RouteComponentProps<MatchParams>): React.ReactElement {
  const { id } = match.params;
  const [notice, setNotice] = useState<INotice | null>(null);
  const [commentList, setCommentList] = useState<INoticeComment[]>([]);
  const [isRerender, setIsRerender] = useState<boolean>(false);

  const getNoticeContent = useCallback(async () => {
    const data = await getNoticeData(id);
    data && setNotice(data);
    data && setCommentList(data.comments);
  }, [id]);

  useEffect(() => {
    getNoticeContent();
  }, [isRerender, getNoticeContent]);

  return (
    <NoticeDetailTemplate
      notice={notice}
      commentList={commentList}
      isRerender={isRerender}
      setIsRerender={setIsRerender}
    ></NoticeDetailTemplate>
  );
}

export default NoticeDetail;
