import uuidv4 from 'uuid/v4';
import _ from 'lodash';
import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => res.send(Object.values(req.context.models.messages)));

router.get('/:messageId', (req, res) => res.send(req.context.models.messages[req.params.messageId]));

router.post('/', (req, res) => {
  const id = uuidv4();
  const message = {
    id,
    text: req.body.text,
    userId: req.context.me.id,
  };

  req.context.models.messages[id] = message;

  return res.send(message);
});

router.delete('/:messageId', (req, res) => {
  const {
    [req.params.messageId]: message,
    ...otherMessages
  } =  req.context.models.messages;
  const checkMessageId =_.find(req.context.models.messages , message => message.id === req.params.messageId);
  let response;

  if (checkMessageId) {
    req.context.models.messages = otherMessages;

    response = res.send(`${message.id} is deleted`);
  } else {
    throw new Error ("Message id is unknow")
  }

  return response;
});

export default router;


