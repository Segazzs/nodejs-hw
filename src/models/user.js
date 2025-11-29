import { Schema, model } from 'mongoose';

export const userSchema = new Schema(
  {
    username: { type: String, required: false, trim: true },
    email: { type: String, required: true, trim: true },
    password: { type: String, required: true, min: 8 },
  },
  { timestamps: true },
);

userSchema.pre('save', function (next) {
  if (!this.username) {
    this.username = this.email;
  }

  next();
});

userSchema.method.toJSON = function () {
  const obj = this.toObject();
  delete obj.password;
  return obj;
};

export const User = model('User', userSchema);
