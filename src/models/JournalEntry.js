const mongoose = require('mongoose');

// Define the Journal Entry schema
const journalEntrySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

// Create a "JournalEntry" model using the schema
const JournalEntry = mongoose.model('JournalEntry', journalEntrySchema);

module.exports = JournalEntry;