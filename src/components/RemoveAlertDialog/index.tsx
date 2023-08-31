import { forwardRef } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';

interface RemoveAlertDialogProps {
  isOpen: boolean;
  onRemove: () => any;
  onClose: () => any;
}

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction='up' ref={ref} {...props} />;
});

export default function RemoveAlertDialog({ isOpen, onRemove, onClose }: RemoveAlertDialogProps) {
  const handleClickRemove = () => {
    onRemove();
    onClose();
  };

  return (
    <Dialog open={isOpen} TransitionComponent={Transition} keepMounted onClose={onClose}>
      <DialogTitle>{'기록을 삭제 하시겠습니까?'}</DialogTitle>
      <DialogActions>
        <Button onClick={onClose}>취소</Button>
        <Button onClick={handleClickRemove}>삭제</Button>
      </DialogActions>
    </Dialog>
  );
}
