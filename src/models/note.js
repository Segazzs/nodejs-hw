import { model, Schema } from 'mongoose';
import { TAGS } from '../constants/tags.js';
import mongoose from 'mongoose';

const noteSchema = new Schema(
  {
    title: { type: String, required: true, trim: true },
    content: { type: String, required: false, trim: true, default: '' },
    tag: {
      type: String,
      enum: TAGS,
      default: 'Todo',
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  { timestamps: true },
);

noteSchema.index({ title: 'text', content: 'text' });

export const Note = model('Note', noteSchema);
