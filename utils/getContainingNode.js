module.exports = function getContainingNode(node) {
	// For styled-components template-literal, declarations are children of Root node
	if (
		node.type !== 'rule' &&
		node.type !== 'atrule' &&
		node.parent.document &&
		node.parent.document.nodes &&
		node.parent.document.nodes.some((item) => item.type === 'root') &&
		(node.parent.source.lang === 'template-literal' || node.parent.source.lang === 'css')
	) {
		return node.parent;
	}

	return node;
};
