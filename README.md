# Todo List Card for Home Assistant

A customizable Lovelace card for managing todo lists with day-based filtering, priority levels, and subtask support.

## Features

- **Day-Based Filtering**: Filter tasks by Today, Tomorrow, Next 7/14 Days, Custom Date Range, or No Due Date
- **Status Filtering**: Show/hide Active, Overdue, and Completed tasks
- **Two Modes**: Tasks mode with priorities and due dates, Shopping mode with quantities and links
- **Subtasks**: Create subtasks with progress tracking
- **Search**: Quick search through all items
- **Customizable Styling**: Configure colors, backgrounds, and more
- **Visual Editor**: Full GUI configuration support

## Installation

### HACS (Recommended)

1. Open HACS in Home Assistant
2. Go to "Frontend" section
3. Click the menu (three dots) and select "Custom repositories"
4. Add this repository URL and select "Lovelace" as the category
5. Click "Install"
6. Refresh your browser

### Manual Installation

1. Download `todo-card.js` from this repository
2. Copy it to your `config/www` folder
3. Add the resource in your Lovelace configuration:

```yaml
resources:
  - url: /local/todo-card.js
    type: module
```

## Configuration

### Basic Configuration

```yaml
type: custom:todo-list-card
entity: todo.my_list
title: My Tasks
```

### Full Configuration Options

```yaml
type: custom:todo-list-card
entity: todo.my_list
title: My Tasks
mode: tasks                          # 'tasks' or 'shopping'
sort_by: priority                    # 'priority', 'duedate', or 'title'
sort_order: asc                      # 'asc' or 'desc'
default_date_filter: all             # 'all', 'today', 'tomorrow', 'next_7_days', 'next_14_days', 'no_date'
show_priority: true                  # Show priority labels
show_filter_menu: true               # Show status filter button
show_date_filter: true               # Show date filter button
show_subtasks: true                  # Show subtasks panel (disable to simplify UI)
show_search_button: true             # Show search button
show_clear_button: true              # Show clear completed button
confirm_delete: true                 # Confirm before deleting items
auto_complete_parent: false          # Auto-complete parent when all subtasks done

# Styling options
card_background: var(--ha-card-background)
card_color: var(--ha-card-background)
completed_color: var(--success-color)
icon_background: rgba(128, 128, 128, 0.2)
text_color: var(--text-primary-color)
completed_text_color: var(--text-accent-color)
```

## Date Filter Options

Click the calendar icon to filter tasks by date:

| Filter | Description |
|--------|-------------|
| All Dates | Show all tasks regardless of due date |
| Today | Only tasks due today |
| Tomorrow | Only tasks due tomorrow |
| Through Today | Tasks due today or earlier (great for seeing overdue + today) |
| Next 7 Days | Tasks due within the next week |
| Next 14 Days | Tasks due within the next two weeks |
| No Due Date | Tasks without a due date set |
| Custom Range | Select a custom start and/or end date |

Filter preferences are saved per entity and persist across sessions.

## Credits

Based on [home-assistant-todo-card](https://github.com/agoberg85/home-assistant-todo-card) by agoberg85, with added day-based filtering capabilities.

## License

MIT License
