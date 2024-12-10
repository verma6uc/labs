import { styled } from '@mui/material/styles';
import {
  DashboardRounded,
  GroupRounded,
  SettingsRounded,
  InsightsRounded,
  ArticleRounded,
  FolderRounded,
  WorkRounded,
  LogoutRounded,
  Menu,
  ChevronLeft,
  Notifications,
  AccountCircle,
  Edit as EditIcon,
  Delete as DeleteIcon,
  Add as AddIcon,
  Info as InfoIcon,
  Save as SaveIcon,
  Refresh as RefreshIcon,
} from '@mui/icons-material';

// Base styled icon with thin strokes
const baseIconStyle = {
  '& path': {
    strokeWidth: '1.5px',
    stroke: 'currentColor',
    fill: 'none',
  },
};

// Action icon style with hover effect
const actionIconStyle = {
  ...baseIconStyle,
  transition: 'all 0.2s ease-in-out',
  '&:hover': {
    '& path': {
      strokeWidth: '2px',
    },
  },
};

export const StyledDashboardIcon = styled(DashboardRounded)(baseIconStyle);
export const StyledGroupIcon = styled(GroupRounded)(baseIconStyle);
export const StyledSettingsIcon = styled(SettingsRounded)(baseIconStyle);
export const StyledInsightsIcon = styled(InsightsRounded)(baseIconStyle);
export const StyledArticleIcon = styled(ArticleRounded)(baseIconStyle);
export const StyledFolderIcon = styled(FolderRounded)(baseIconStyle);
export const StyledWorkIcon = styled(WorkRounded)(baseIconStyle);
export const StyledLogoutIcon = styled(LogoutRounded)(baseIconStyle);
export const StyledMenuIcon = styled(Menu)(baseIconStyle);
export const StyledChevronLeftIcon = styled(ChevronLeft)(baseIconStyle);
export const StyledNotificationsIcon = styled(Notifications)(baseIconStyle);
export const StyledAccountCircleIcon = styled(AccountCircle)(baseIconStyle);

// Action icons
export const StyledEditIcon = styled(EditIcon)(actionIconStyle);
export const StyledDeleteIcon = styled(DeleteIcon)(actionIconStyle);
export const StyledAddIcon = styled(AddIcon)(actionIconStyle);
export const StyledInfoIcon = styled(InfoIcon)(actionIconStyle);
export const StyledSaveIcon = styled(SaveIcon)(actionIconStyle);
export const StyledRefreshIcon = styled(RefreshIcon)(actionIconStyle);
