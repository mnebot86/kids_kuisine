describe('Homepage', () => {
	it('should display the main heading', () => {
		cy.visit('http://localhost:3005');
		cy.get('h1').contains('New Project');
	});
});
