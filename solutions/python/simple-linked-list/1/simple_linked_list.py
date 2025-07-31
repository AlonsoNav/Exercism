class EmptyListException(Exception):
    def __init__(self, message):
        self.message = message


class Node:
    def __init__(self, value, next = None):
        self._value = value
        self._next = next

    def value(self):
        return self._value

    def next(self):
        return self._next


class LinkedList:
    def __init__(self, values=[]):
        self._len = 0
        self._head = None
        for value in values:
            self.push(value)

    def __iter__(self):
        current = self._head
        while current is not None:
            yield current.value()
            current = current.next()

    def __len__(self):
        return self._len

    def head(self):
        if self._head is None:
            raise EmptyListException("The list is empty.")
        return self._head

    def push(self, value):
        new_node = Node(value, self._head)
        self._head = new_node
        self._len += 1

    def pop(self):
        if self._head is None:
            raise EmptyListException("The list is empty.")
        value = self._head.value()
        self._head = self._head.next()
        self._len -= 1
        return value

    def reversed(self):
        return LinkedList(list(self))
