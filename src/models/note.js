import { model, Schema } from 'mongoose';

const noteSchema = new Schema(
  {
    title: { type: String, required: true, trim: true },
    content: { type: String, required: false, trim: true, default: '' },
    tag: {
      type: String,
      enum: [
        'Work',
        'Personal',
        'Meeting',
        'Ideas',
        'Travel',
        'Finance',
        'Health',
        'Important',
        'Todo',
        'Shopping',
      ],
      default: 'Todo',
    },
  },
  { timestamps: true },
);

export const Note = model('Note', noteSchema);
