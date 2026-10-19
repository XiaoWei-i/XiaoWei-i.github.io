/* Keep the citation usable as plain text when clipboard access is unavailable. */
document.querySelectorAll('[data-copy-citation]').forEach((button) => {
  button.addEventListener('click', async () => {
    const citation = document.getElementById(button.dataset.copyCitation);
    const status = document.getElementById(button.getAttribute('aria-describedby'));
    if (!citation || !status) return;
    try {
      await navigator.clipboard.writeText(citation.textContent.trim());
      button.textContent = 'Copied';
      status.textContent = 'Citation copied to clipboard.';
      window.setTimeout(() => { button.textContent = 'Copy BibTeX'; }, 2500);
    } catch {
      status.textContent = 'Select and copy the BibTeX below.';
    }
  });
});
