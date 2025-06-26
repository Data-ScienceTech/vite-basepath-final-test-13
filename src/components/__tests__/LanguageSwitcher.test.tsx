
import { render, screen } from '@testing-library/react';
import { fireEvent } from '@testing-library/dom';
import { vi } from 'vitest';
import { LanguageSwitcher } from '../LanguageSwitcher';

// Mock react-i18next
const mockChangeLanguage = vi.fn();
vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    i18n: {
      language: 'en',
      changeLanguage: mockChangeLanguage,
    },
  }),
}));

describe('LanguageSwitcher', () => {
  beforeEach(() => {
    mockChangeLanguage.mockClear();
  });

  it('renders current language', () => {
    render(<LanguageSwitcher />);
    expect(screen.getByText('English')).toBeInTheDocument();
    expect(screen.getByText('🇺🇸')).toBeInTheDocument();
  });

  it('shows dropdown when clicked', () => {
    render(<LanguageSwitcher />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    
    expect(screen.getByText('Español')).toBeInTheDocument();
    expect(screen.getByText('Français')).toBeInTheDocument();
    expect(screen.getByText('Português')).toBeInTheDocument();
  });

  it('changes language when option is selected', () => {
    render(<LanguageSwitcher />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    
    const spanishOption = screen.getByText('Español');
    fireEvent.click(spanishOption);
    
    expect(mockChangeLanguage).toHaveBeenCalledWith('es');
  });
});
