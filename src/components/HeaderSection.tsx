import React from 'react';
import { Button } from '@/components/ui/button';
import { FileDown, Trash2 } from 'lucide-react';
import LanguageMenu from './LanguageMenu';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

interface HeaderSectionProps {
  t: (key: string) => string;
  handleExportPDF: () => void;
  handleReset: () => void;
}

export const HeaderSection: React.FC<HeaderSectionProps> = ({ t, handleExportPDF, handleReset }) => {
  return (
    <div className="flex justify-between items-center mb-8">
      <h1 className="text-3xl font-bold text-center">{t('financial.runway.calculator')}</h1>
      <div className="flex items-center gap-4">
        <Button onClick={handleExportPDF} className="flex items-center gap-2">
          <FileDown className="h-4 w-4" />
          Export PDF
        </Button>
        <LanguageMenu />
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="destructive" className="flex items-center gap-2">
              <Trash2 className="h-4 w-4" />
              {t('reset.data')}
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This will wipe out all data. Proceed?
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>No</AlertDialogCancel>
              <AlertDialogAction onClick={handleReset}>Yes, proceed</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
};