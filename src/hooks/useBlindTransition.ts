// hooks/useBlindTransition.ts
import { useState, useEffect, useCallback } from 'react';

interface UseBlindTransitionReturn {
  isOpen: boolean;
  showContent: boolean;
  triggerOpen: () => void;
  triggerClose: () => void;
}

export const useBlindTransition = (autoOpen: boolean = true): UseBlindTransitionReturn => {
  const [isOpen, setIsOpen] = useState(false);
  const [showContent, setShowContent] = useState(false);

  const triggerOpen = useCallback(() => {
    setIsOpen(true);
    setTimeout(() => setShowContent(true), 400);
  }, []);

  const triggerClose = useCallback(() => {
    setShowContent(false);
    setTimeout(() => setIsOpen(false), 100);
  }, []);

  useEffect(() => {
    if (autoOpen) {
      const timer = setTimeout(() => {
        triggerOpen();
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [autoOpen, triggerOpen]);

  return {
    isOpen,
    showContent,
    triggerOpen,
    triggerClose,
  };
};

export default useBlindTransition;