class Notification < ActiveRecord::Base
  include IceCube
  serialize :schedule, Hash

  belongs_to :campaign
  validates :title, presence: true
  validates :message, presence: true

  def schedule
    Schedule.from_hash(read_attribute(:schedule))
  end

  def schedule=(value)
    write_attribute(:schedule, value.to_hash)
  end

  def day
    no = schedule.next_occurrence
    return Date::DAYNAMES[no.to_time.wday].downcase unless no.nil?
  end

  def hour
    no = schedule.next_occurrence
    return no.to_time.hour unless no.nil?
  end

  def duration
    no = schedule.next_occurrence
    return no.duration / 3600 unless no.nil?
  end

  def active
    return schedule.occurs_on?(Time.now)
  end
end
