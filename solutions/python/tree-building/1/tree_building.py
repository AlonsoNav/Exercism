class Record:
    def __init__(self, record_id, parent_id):
        self.record_id = record_id
        self.parent_id = parent_id


class Node:
    def __init__(self, node_id):
        self.node_id = node_id
        self.children = []


def BuildTree(records):
    res = []
    records.sort(key=lambda x: x.record_id)
    for i in range(0, len(records)):
        parent = records[i].parent_id
        if records[i].record_id != i:
            raise ValueError("Record id is invalid or out of order.")
        if parent > i:
            raise ValueError("Node parent_id should be smaller than it's record_id.")
        if res == []:
            res.append(Node(i))
        else:
            if parent == i:
                raise ValueError("Only root should have equal record and parent id.")
            node = Node(i)
            res.append(node)
            res[parent].children.append(node)
        

    return res[0] if len(res) > 0 else None
