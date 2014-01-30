module ApplicationHelper
  def weekdays_for_select
    [
        ['Monday', 'monday'],
        ['Tuesday', 'tuesday'],
        ['Wednesday', 'wednesday'],
        ['Thursday', 'thursday'],
        ['Friday', 'friday'],
        ['Saturday', 'saturday'],
        ['Sunday', 'sunday'],
    ]
  end

  def full_title(page_title)
    base_title = "DC Notifier"
    if page_title.empty?
      base_title
    else
      "#{base_title} :: #{page_title}"
    end
  end
end
