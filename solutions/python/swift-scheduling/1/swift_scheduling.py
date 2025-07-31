from datetime import datetime, timedelta, time
import math

def delivery_date(start, description):
    f = datetime.fromisoformat(start)
    if description == "NOW":
        return (f + timedelta(hours=2)).isoformat()
    if description == "ASAP":
        if f.time() < time(13,0):
            f = f.replace(hour=17, minute=0, second=0) 
        else:
            f += timedelta(days=1)
            f = f.replace(hour=13, minute=0, second=0)
        return f.isoformat()
    if description == "EOW":
        wd = f.weekday()
        if wd < 3:
            f += timedelta(days=(4 - wd) % 7)
            f = f.replace(hour=17, minute=0, second=0)
        else:
            f += timedelta(days=(6 - wd) % 7)
            f = f.replace(hour=20, minute=0, second=0)
        return f.isoformat()
    if description[-1] == 'M':
        n = int(description[:-1])
        if f.month < n:
            f = f.replace(month=n, hour=8, minute=0, second=0)
            return set_first_workday(f).isoformat()
        else:
            f = f.replace(month=n, hour=8, minute=0, second=0)
            f += timedelta(days=365)
            return set_first_workday(f).isoformat()
    if description[0] == 'Q':
        n = int(description[1:])
        if math.ceil(f.month / 3) <= n:
            f = f.replace(month=n * 3, hour=8, minute=0, second=0)
            return set_last_workday(f).isoformat()
        else:
            f = f.replace(month=n * 3, hour=8, minute=0, second=0)
            f += timedelta(days=365)
            return set_last_workday(f).isoformat()




def set_first_workday(f):
    f = f.replace(day=1)
    while f.weekday() > 4:
        f += timedelta(days=1)
    return f

def set_last_workday(f):
    if f.month == 12:
        next_m = datetime(f.year + 1, 1, 1, f.hour, f.minute, f.second)
    else:
        next_m = datetime(f.year, f.month + 1, 1, f.hour, f.minute, f.second)

    f = next_m - timedelta(days=1)
    while f.weekday() > 4:
        f -= timedelta(days=1)
    return f