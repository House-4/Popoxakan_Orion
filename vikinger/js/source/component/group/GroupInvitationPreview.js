import React from 'react';

import Avatar from '../avatar/Avatar';

import UserPreviewAuthor from '../user-preview/UserPreviewAuthor';

import AcceptGroupInvitationButton from '../button/action-button/action-button-group/AcceptGroupInvitationButton';
import RemoveGroupInvitationButton from '../button/action-button/action-button-group/RemoveGroupInvitationButton';

import TagSticker from '../tag/TagSticker';

import { truncateText, joinText } from '../../utils/core';

function GroupInvitationPreview(props) {
  const membersText = props.data.group.total_member_count === 1 ? vikinger_translation.member : vikinger_translation.members,
        postsText = props.data.group.post_count === 1 ? vikinger_translation.post : vikinger_translation.posts;

  return (
    <div className="user-preview small">
      {/* USER PREVIEW COVER */}
      <div className="user-preview-cover" style={{background: `url(${props.data.group.cover_image_url}) center center / cover no-repeat`}}></div>
      {/* USER PREVIEW COVER */}
  
      {/* USER PREVIEW INFO */}
      <div className="user-preview-info">
        <TagSticker icon={props.data.group.status} />

        {/* USER SHORT DESCRIPTION */}
        <div className="user-short-description small">
          <Avatar modifiers='user-short-description-avatar' data={props.data.group} />
    
          <p className="user-short-description-title"><a href={props.data.group.link}>{truncateText(props.data.group.name, 25)}</a></p>
          <p className="user-short-description-text"><a href={props.data.group.link}>&#64;{truncateText((joinText(props.data.group.name)).toLowerCase(), 35)}</a></p>
        </div>
        {/* USER SHORT DESCRIPTION */}

        {/* USER STATS */}
        <div className="user-stats">
          <div className="user-stat">
            <p className="user-stat-title">{props.data.group.total_member_count}</p>
            <p className="user-stat-text">{membersText}</p>
          </div>

          <div className="user-stat">
            <p className="user-stat-title">{props.data.group.post_count}</p>
            <p className="user-stat-text">{postsText}</p>
          </div>
        </div>
        {/* USER STATS */}

        {/* USER PREVIEW ACTIONS */}
        <div className="user-preview-actions">
          <RemoveGroupInvitationButton  data={props.data}
                                        modifiers="tertiary"
                                        icon="leave-group"
                                        title={vikinger_translation.reject_invitation}
                                        onActionComplete={props.onActionComplete}
          />

          <AcceptGroupInvitationButton  data={props.data}
                                        modifiers="secondary"
                                        icon="join-group"
                                        title={vikinger_translation.accept_invitation}
                                        onActionComplete={props.onActionComplete}
          />
        </div>
        {/* USER PREVIEW ACTIONS */}
      </div>
      {/* USER PREVIEW INFO */}

      {/* USER PREVIEW FOOTER */}
      <div className="user-preview-footer padded">
        {/* USER PREVIEW AUTHOR */}
        <UserPreviewAuthor data={props.data.inviter} />
        {/* USER PREVIEW AUTHOR */}
      </div>
      {/* USER PREVIEW FOOTER */}
    </div>
  );
}

export { GroupInvitationPreview as default };