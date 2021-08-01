import { Img, Tag } from 'components/atoms';
import React from 'react';
import { LinkWrapper } from './style';

export interface IProps {
  imagePath?: string;
  tagName: string;
  tagColor?: string;
  title: string;
  content: string;
  date: string;
  id: string;
}

function MyPageConcertCard({
  imagePath = '',
  tagName,
  tagColor = '5',
  title,
  content,
  date,
  id,
}: IProps): React.ReactElement {
  return (
    <LinkWrapper to={`/concert/${id}`}>
      <span>
        <div className="card">
          <div className="card__img-wrapper">
            <Img src={imagePath} />
          </div>
          <div className="card__info">
            <Tag className="subhead2" name={tagName} color={tagColor} isSelected={false} />
            <div className="card__info--title subhead4">{title}</div>
            <div className="card__info--content body2" dangerouslySetInnerHTML={{ __html: `${content}` }}></div>
            <div className="card__info--date body1_eng">{date}</div>
          </div>
        </div>
      </span>
    </LinkWrapper>
  );
}

export default MyPageConcertCard;
